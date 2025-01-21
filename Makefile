build :
	GOOS=js GOARCH=wasm go build -C ./wasm -o ../app.wasm .

push :
	git add .
	git commit -a
	git push