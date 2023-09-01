// let a=5;
// let b=2;
// let c=a+b;
// console.log(c);

// 3+2*4/2*3*3+2-5;
// let a=2;
// let b=3;
// let c=4;
// let d=5;

// let e=((b+a)*c)/(a*b*b)+(a-d);
// console.log(e);

// let kkm=80;
// let nilai=101;
// if (nilai>kkm) {
//     console.log("lulus")
// }else{console.log("gagal")};

let bulan=11;
let tanggal=20;
let zodiak="belum dibuat";
if (bulan==1) {
    if (tanggal>0 && tanggal<20) {
       zodiak="aquarius";
    }
    if (tanggal>19 && tanggal<32) {
        zodiak="capricorn";
    }
}

if (bulan==2) {
    if (tanggal>0 && tanggal<20) {
        zodiak="aries";
    }
    if (tanggal>19 && tanggal<29) {
        zodiak="leo";
    }
}

if (bulan==3) {
    if (tanggal>0 && tanggal<16) {
        zodiak="gemini";
    }
    if (tanggal>15 && tanggal<31) {
        zodiak="virgo";
    }
}

if (bulan==4) {
    if (tanggal>0 && tanggal<16) {
        zodiak="sagitarius";
    }
    if (tanggal>15 && tanggal<31) {
        zodiak="taurus";
    }
}

if (bulan==5) {
    if (tanggal>0 && tanggal<16) {
        zodiak="niat";
    }
    if (tanggal>15 && tanggal<32) {
        zodiak="sholat";
    }
}

if (bulan==6) {
    if (tanggal>0 && tanggal<16) {
        zodiak="keluar";
    }
    if (tanggal>15 && tanggal<31) {
        zodiak="masuk";
    }
}

if (bulan==7) {
    if (tanggal>0 && tanggal<16) {
        zodiak="sekolah";
    }
    if (tanggal>15 && tanggal<32) {
        zodiak="istirahat";
    }
}

if (bulan==8) {
    if (tanggal>0 && tanggal<16) {
        zodiak="pulang";
    }
    if (tanggal>15 && tanggal<32) {
        zodiak="turu";
    }
}

if (bulan==9) {
    if (tanggal>0 && tanggal<16) {
        zodiak="makan";
    }
    if (tanggal>15 && tanggal<31) {
        zodiak="tidur";
    }
}

if (bulan==10) {
    if (tanggal>0 && tanggal<16) {
        zodiak="pulang";
    }
    if (tanggal>15 && tanggal<32) {
        zodiak="turu";
    }
}

if (bulan==11) {
    if (tanggal>0 && tanggal<16) {
        zodiak="singa";
    }
    if (tanggal>15 && tanggal<31) {
        zodiak="ikan";
    }
}

if (bulan==12) {
    if (tanggal>0 && tanggal<16) {
        zodiak="pemanah";
    }
    if (tanggal>15 && tanggal<32) {
        zodiak="domba";
    }
}
    console.log(zodiak);