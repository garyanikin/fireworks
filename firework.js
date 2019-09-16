function Firework () {
    this.firework = new Partical(random(width), height)

    this.isOffBound = function() {
        return this.firework.isOffbound()
    }

    this.update = function() {
        this.firework.applyForce(gravity)
        this.firework.update()
    }

    this.show = function() {
        this.firework.show()
    }
}