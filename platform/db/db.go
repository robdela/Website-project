package db

import (
	"package/platform/structs"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var dsn = "host=localhost user=postgres password=2580 dbname=postgres port=5000 sslmode=disable TimeZone=Europe/Paris"
var Db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

func ConnectToDatabase() {
	if err != nil {
		panic("failed to connect database")
	}
	Db.AutoMigrate(&structs.Video{}, &structs.User{}, &structs.Creator{}, &structs.Stream{})

}
