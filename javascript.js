new TypeIt(".multipleStrings", { 
    speed:50,
    delay:700,
    loop: true,
    
})

.type("font-Ed", { delay: 100 })
.move (-1, { delay: 100})
.type("n", {delay: 100})
.move(null, {to: "START", instant: true, delay: 300})
.move(1, {delay: 200})
.delete(1,)
.type("F", {delay: 225})
.type("r")
.pause(100)
.move(null, {to: "END"})
.delete(9)
.type("Bac-Enf", {delay: 300})
.move(null, {to: "END", instant: true})
.delete(1)
.type("d", {delay:500})
.move(null, {to: "START", instant: true, delay:200})
.move(3, {instant:true})
.type("k", {delay: 200})
.move(null, {to: "END", instant: true, delay: 400})
.delete(8)
.type("...", {delay: 900})
.delete(3)
.type("Ful-Sack Devlper")
.move(-14, {delay: 300})
.type("l", {delay: 100})
.move(3, {delay: 100})
.type("t")
.move(7, {delay: 300})
.type("e")
.move(1, {delay: 200})
.type("o")
.move(null, {to: "END", instant: true, delay: 500})
.type(".")
.delete(18)
.type("...", {delay: 300})

.go();

