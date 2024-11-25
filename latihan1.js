// 1. tukar nilai data dari variabel yang tersedia

function test(){
    var a = 50;
    var b = 100;
    console.log('a awal = ', a);
    console.log('b awal = ', b);

    // bagaimana cara nya supaya nilai nya ditukar tanpa menambah variabel baru
    [a,b] = [b,a];

    console.log('a final = ', a);
    console.log('b final = ', b);
}
test();
