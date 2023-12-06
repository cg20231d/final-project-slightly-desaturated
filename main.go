package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/hypebeast/go-osc/osc"
)

var museData struct {
	Alpha     float32
	Beta      float32
	Delta     float32
	Theta     float32
	Gamma     float32
	Mellow    float32
	Blink     bool
	JawClench bool
}

func alphaHandler(msg *osc.Message) {
	museData.Alpha, _ = msg.Arguments[0].(float32)
}

func betaHandler(msg *osc.Message) {
	museData.Beta, _ = msg.Arguments[0].(float32)
}

func deltaHandler(msg *osc.Message) {
	museData.Delta, _ = msg.Arguments[0].(float32)
}

func thetaHandler(msg *osc.Message) {
	museData.Theta, _ = msg.Arguments[0].(float32)
}

func gammaHandler(msg *osc.Message) {
	museData.Gamma, _ = msg.Arguments[0].(float32)
}

func mellowHandler(msg *osc.Message) {
	museData.Mellow, _ = msg.Arguments[0].(float32)
}

func blinkHandler(msg *osc.Message) {
	museData.Blink = true
}

func jawClenchHandler(msg *osc.Message) {
	museData.JawClench = true
}

func getDataHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"alpha":     museData.Alpha,
		"beta":      museData.Beta,
		"delta":     museData.Delta,
		"theta":     museData.Theta,
		"gamma":     museData.Gamma,
		"mellow":    museData.Mellow,
		"blink":     museData.Blink,
		"jawClench": museData.JawClench,
	})
}

func main() {
	ip := "192.168.18.59"
	port := 5000

	dispatcher := osc.NewStandardDispatcher()
	dispatcher.AddMsgHandler("/muse/elements/alpha_absolute", alphaHandler)
	dispatcher.AddMsgHandler("/muse/elements/beta_absolute", betaHandler)
	dispatcher.AddMsgHandler("/muse/elements/delta_absolute", deltaHandler)
	dispatcher.AddMsgHandler("/muse/elements/theta_absolute", thetaHandler)
	dispatcher.AddMsgHandler("/muse/elements/gamma_absolute", gammaHandler)
	dispatcher.AddMsgHandler("/muse/elements/blink", blinkHandler)
	dispatcher.AddMsgHandler("/muse/elements/jaw_clench", jawClenchHandler)

	server := &osc.Server{Addr: fmt.Sprintf("%s:%d", ip, port)}
	server.Dispatcher = dispatcher

	go func() {
		err := server.ListenAndServe()
		if err != nil {
			fmt.Println("Error starting server:", err)
			os.Exit(1)
		}
	}()

	// Setup Gin router
	router := gin.Default()
	router.GET("/api/data", getDataHandler)

	// Run Gin server
	go func() {
		err := router.Run(":8080")
		if err != nil {
			fmt.Println("Error starting Gin server:", err)
			os.Exit(1)
		}
	}()

	fmt.Printf("Serving on %s:%d\n", ip, port)

	// Run forever
	for {
		time.Sleep(100 * time.Millisecond)
	}
}
