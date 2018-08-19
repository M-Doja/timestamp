module.exports = function timeStamp(){
  const Now = new Date().toLocaleString();
  console.log(`Currently it is ${Now}.`);
  return Now;
};
