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
    val file = Paths.get("step01.jsp")
    val outfile = Paths.get("step01.html")
    val strList = ArrayList<String>()
    val charset = Charset.forName(ENCODE)
    
    Files.readAllLines(file, charset).forEach {
        if (it.contains("<%@")) return@forEach
        
        var replacedLine = it
        when {
            //c:ifの場合、selectorとして使用できないため置換する
            it.contains("c:if") -> replacedLine = it.replace("c:if", "cif")
        }
        strList.add(replacedLine)
    }
    Files.write(outfile, strList, charset)

    val doc: Document = Jsoup.parse(outfile.toFile(), ENCODE)
    
    removeJspTags(doc)
    
    replaceJspTagToHtmlTag(doc)
    
    val writer = Files.newBufferedWriter(outfile, Charset.defaultCharset())
    writer.write(doc.html())
    writer.close()
}

fun removeJspTags(node: Node) {
    var i = 0
    while(i < node.childNodeSize()){
        val child: Node = node.childNode(i)
        if (child.nodeName() == "c:set" || child.nodeName() == "noscript") {
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
}
