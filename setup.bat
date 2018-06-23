@echo on
./compile-java-code.sh
./compile-java8-code.sh
node-gyp configure build
npm test
npm install java

print OK!
