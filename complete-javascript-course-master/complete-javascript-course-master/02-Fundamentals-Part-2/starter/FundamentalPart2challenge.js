//Challenge 5
// const calAverage = (score1, score2, score3) =>  avgScore = `Avgerage score is ${((score1+score2+score3)/3)}`;
// // console.log(calAverage(44,23,71));
// const scoreDolphin =(calAverage(44, 23, 71));
// const scoreKoalas = (calAverage(65, 54, 41));
// function checkWinner(avgDolphin, avgKoala)
// {
     //     if(avgDolphin >= 2* avgKoala){
//        console.log(`Dolphine wins! ${avgDolphin} vs ${avgKoala}`)
//     }else if(avgKoala >=2 * avgDolphin){
//         console.log(`Koala wins! ${avgKoala} vs ${avgDolphin}`)
//     }else{
//         console.log(`No one wins..!!`)
//     }
   
// }
// checkWinner(scoreDolphin, scoreKoalas);




//Challenge 6
// const calcTip = function(bill)
// {
//  return bill >=50  && bill <=300 ? bill * 0.15 : bill *0.20 ;
// }
// const bills = [125,555,78];
// const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips, bills);
// const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);




//Challenge 7
// const mark = {
//     fullName: " Mark Miller",
//     mass : 78,
//     height : 1.69,
//     calBMI: function(){
//        this.BMI = (this.mass/(this.height* this.height));
//        return this.BMI
//     }

// }
// const john = {
//     fullName : "John Smith",
//     mass : 92,
//     height :1.95,
//     calBMI: function(){
//         this.BMI = (this.mass/(this.height* this.height));
//         return this.BMI
//      }

// }
// console.log(mark.calBMI());
// console.log(john.calBMI())
// console.log(`${mark.BMI > john.BMI ? mark.fullName : john.fullName} (${mark.BMI} )is higher than ${john.BMI < mark.BMI ? john.fullName : mark.fullName} (${john.BMI})`);





//Challenge 8
// const calTip = function(bill){
//      return bill >=50 && bill <=300 ? bill *0.15 : bill *0.20;
//      }
// const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// for(let i = 0 ; i < bills.length; i++){
//      const tip = calTip(bills[i]);
//      tips.push(tip);
//      total.push(tip + bills[i])
// }
// console.log(bills, tips, total)


//calculate avg and sum of arr
// const calAverage = function(arr){
//     let sum = 0;
//      for(let j =0 ; j< arr.length; j++){
//           sum = sum + arr[j];
         
//      }
//      console.log(`Sum is ${sum}`)
//       console.log (`Avg is ${sum/arr.length}`)
    
     
// }
// calAverage([2,3,7])








