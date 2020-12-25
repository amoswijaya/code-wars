function isPangram(string) {
    let lowerCase = string.toLowerCase()
    let a = []
    let b = []
    let c = []
    let d = []
    let f = []
    let g = []
    let h = []
    let e = []
    let i = []
    let j = []
    let k = []
    let l = []
    let m = []
    let n = []
    let o = []
    let p = []
    let q = []
    let r = []
    let s = []
    let t = []
    let u = []
    let v = []
    let w = []
    let x = []
    let y = []
    let z = []

    for (let index = 0; index < lowerCase.length; index++) {
        switch (lowerCase[index]) {
            case 'a':
                a.push(true)
                break
            case 'b':
                b.push(true)
                break
            case 'c':
                c.push(true)
                break
            case 'd':
                d.push(true)
                break
            case 'e':
                e.push(true)
                break
            case 'f':
                f.push(true)
                break
            case 'g':
                g.push(true)
                break
            case 'h':
                h.push(true)
                break
            case 'i':
                i.push(true)
                break
            case 'j':
                j.push(true)
                break
            case 'k':
                k.push(true)
                break
            case 'l':
                l.push(true)
                break
            case 'm':
                m.push(true)
                break
            case 'n':
                n.push(true)
                break
            case 'o':
                o.push(true)
                break
            case 'p':
                p.push(true)
                break
            case 'q':
                q.push(true)
                break
            case 'r':
                r.push(true)
                break
            case 's':
                s.push(true)
                break
            case 't':
                t.push(true)
                break
            case 'u':
                u.push(true)
                break
            case 'v':
                v.push(true)
                break
            case 'w':
                w.push(true)
                break
            case 'x':
                x.push(true)
                break
            case 'y':
                y.push(true)
                break
            case 'z':
                z.push(true)
                break
        }
    }
    let isPanggram = true
    let isPangram = [a, b, c, d, e, f, g, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
    for (let data = 0; data < isPangram.length; data++) {
        if (isPangram[data].length === 0) {
            isPanggram = false
        }

    }

    if (!isPanggram) return false

    return isPanggram

}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)
var string1 = "This is not a pangram."
console.log(isPangram(string1), false)