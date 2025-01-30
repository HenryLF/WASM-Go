build :
	GOOS=js GOARCH=wasm go build -C ./wasm -o ../deployement/app.wasm .

push :
	git add .
	git commit -a
	git push