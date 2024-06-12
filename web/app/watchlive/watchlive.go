package watchlive

import (
	"net/http"
	"package/platform/db"
	"package/platform/structs"

	"github.com/gin-gonic/gin"
)

func Handler(c *gin.Context) {
	creatorname := c.Param("creator")

	c.HTML(http.StatusOK, "watchlive.html", "")
	var creator structs.Creator
	if db.Db.Table("creators").Where("creatorname = ?", creatorname).First(&creator).Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Couldn't find a creator with this name"})

		return
	}

	if !creator.IsLive {
		c.JSON(http.StatusNotFound, gin.H{"error": "This creator is not live at the moment"})

		return
	}

}
