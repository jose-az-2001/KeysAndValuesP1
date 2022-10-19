class KeysAndValues {
    constructor(){
        this.obj = null;
        this.keys = null;
        this.values = null;
    }
    ins_object(objeto){
        this.obj = objeto
        this.get_object()
    }
    get_object(){
        this.keys = Object.keys(this.obj)
        this.values = Object.values(this.obj)
        var n, i, k, aux1, aux2
        n = this.keys.length

        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (this.keys[i] > this.keys[i + 1]) {
                    aux1 = this.keys[i];
                    aux2 = this.values[i];
                    this.keys[i] = this.keys[i + 1];
                    this.keys[i + 1] = aux1;
                    this.values[i] = this.values[i + 1];
                    this.values[i + 1] = aux2;
                }
            }
        }
        console.log("{["+this.keys+"]["+this.values+"]}")
    }
}

let Ob = new KeysAndValues()
console.log("Inicio")
Ob.ins_object({ 3: 'b', 1: 'a', 2: 'c' })
Ob.ins_object({ a: "Apple", b: "Microsoft", c: "Google"})
Ob.ins_object({ key1: true, key2: false, key3: "undefined"})
