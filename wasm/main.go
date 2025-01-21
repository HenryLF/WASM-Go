//go:build js && wasm

package main

import (
	"syscall/js"
)

func main() {
	js.Global().Set("PublicFunc", PublicFunc)
	ch := make(chan bool)
	<-ch
}

func PublicFunc(this js.Value, n []js.Value) any {
	return js.ValueOf(n)
}
