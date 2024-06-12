package structs

type Stream struct {
	ID          string  `gorm:"column:id" json:"id"`
	Title       string  `gorm:"column:title" json:"title"`
	Creator     string  `gorm:"column:artist" json:"creator"`
	Artist      string  `gorm:"column:artist" json:"artist"`
	Category    string  `gorm:"column:category" json:"category"`
	Viewers     int     `gorm:"column:views" json:"views"`
	Score       float64 `gorm:"column:score" json:"score"`
	Description string  `gorm:"column:description" json:"description"`
}

type User struct {
	UserName      string   `gorm:"column:username"`
	FullName      string   `gorm:"column:fullname"`
	Email         string   `gorm:"column:email"`
	Password      string   `gorm:"column:password"`
	Likes         []string `gorm:"column:likes; type :text[]"`
	WatchedVideos []string `gorm:"column:watchedvideos; type :text[]"`
	AccessToken   string   `gorm:"column:token"`
	Followings    []string `gorm:"column:followings; type :text[]"`
	Subscribings  []string `gorm:"column:subscribings; type :text[]"`
	Tokens        int      `gorm:"column:tokens"`
	ReportCount   int      `gorm:"column:reportcount"`
}

type Creator struct {
	CreatorName string `gorm:"column:creatorname"`
	UserName    string `gorm:"column:username"`
	Followers   int    `gorm:"column:followers"`
	Subscribers int    `gorm:"column:subscribers"`
	IsLive      bool   `gorm:"column:islive"`
}

type Video struct {
	ID          string  `gorm:"column:id" json:"id"`
	Folder      string  `gorm:"folder" json:"folder"`
	Title       string  `gorm:"column:title" json:"title"`
	Creator     string  `gorm:"column:artist" json:"creator"`
	Artist      string  `gorm:"column:artist" json:"artist"`
	Date        string  `gorm:"column:date" json:"date"`
	Category    string  `gorm:"column:category" json:"category"`
	Views       int     `gorm:"column:views" json:"views"`
	Likes       int     `gorm:"column:likes" json:"likes"`
	Score       float64 `gorm:"column:score" json:"score"`
	Description string  `gorm:"column:description" json:"description"`
	FilePath    string  `gorm:"colum:filepath" json:"filepath"`
	IsPublic    bool    `gorm:"column:ispublic"`

	//Comments []string `gorm:"column:comments" json:"comments"`
}
