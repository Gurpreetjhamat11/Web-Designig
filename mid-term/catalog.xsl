<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>My CD Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Author</th>
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Genre</th>
      <th style="text-align:left">Price</th>
      <th style="text-align:left">Publish Date</th>
      <th style="text-align:left">Description</th>
    </tr>
    <xsl:for-each select="catalog/book">
    <tr>
      <td><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="genre"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="publish_date"/></td>
      <td><xsl:value-of select="description"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>