function combine(a: number | string, b: number | string, type :"number"|"string") {
    if (type === 'number') {
      return (+a) + (+b);
    } else {
      return a.toString() + b.toString();
    }
  }
  
  console.log(combine(10, 20,"number"));
  
  console.log(combine("nik", "hil","string"));