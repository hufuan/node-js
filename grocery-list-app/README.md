env:
npm init 
npm install yargs --save
node app add --item=eggs --price=10
node app add --item=tomato --price=15
node app add --item=tomato --price=30
node app add --item=chicken --price=40
node app remove  --item=eggs   
node app print    
node app priceOf --item=eggs