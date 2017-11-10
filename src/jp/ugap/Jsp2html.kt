package jp.ugap

import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.nodes.Node
import java.nio.charset.Charset
import java.nio.file.Files
import java.nio.file.Paths
import java.util.*

/**
 * @auther uga
 */

val ENCODE = "UTF-8"

fun main(args: Array<String>) {
    convertJspToHtml("path/to/jsp", "path/to/output", "path/to/script")
}

fun convertJspToHtml(input: String, output: String, appendChildren: String) {
    val file = Paths.get(input)
    val outfile = Paths.get(output)
    val scriptfile = Paths.get(appendChildren)
    val strList = ArrayList<String>()
    val charset = Charset.forName(ENCODE)

    Files.readAllLines(file, charset).forEach {
        //htmlタグより上にある%は、消さないとjsoupがhtmlと認識してくれない
        if (it.contains("<%@")) return@forEach
        val replacedLine = when {
            //%の場合、selectorとして使用できないため置換する
            it.contains("%") -> it.replace("%", "percent")
            //c:ifの場合、selectorとして使用できないため置換する
            it.contains("c:if") -> it.replace("c:if", "cif")
            else -> it
        }
        strList.add(replacedLine)
    }
    Files.write(outfile, strList, charset)

    val doc: Document = Jsoup.parse(outfile.toFile(), ENCODE)

    removeJspTags(doc)

    replaceJspTagToHtmlTag(doc)

    val script: Document = Jsoup.parse(scriptfile.toFile(), ENCODE)
    doc.select("body").append(script.html())

    val writer = Files.newBufferedWriter(outfile, Charset.defaultCharset())
    writer.write(doc.html())
    writer.close()
    
}
fun removeJspTags(node: Node) {
    var i = 0
    while(i < node.childNodeSize()){
        val child: Node = node.childNode(i)
        println("nodeName: ${child.nodeName()}")
        if (child.nodeName() == "c:set" 
                || child.nodeName() == "percent"
                || child.nodeName() == "script") {
            child.remove()
        } else {
            //再帰的に検索
            removeJspTags(child)
            i++
        }
    }
}

fun replaceJspTagToHtmlTag(doc: Document) {
    doc.select("cif").tagName("div").attr("style", "display:none")
    doc.select("#vueData").empty()
}
