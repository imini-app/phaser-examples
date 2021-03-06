import Phaser from 'phaser'

var graphics;
var ellipses;

export default class Scene extends Phaser.Scene {
    constructor() {
        super('full-screen')
    }

    create() {
        graphics = this.add.graphics({ lineStyle: { color: 0x00aaaa } });

        var ellipse = new Phaser.Geom.Ellipse(400, 300, 0, 0);

        ellipses = [ellipse];

        for (var i = 0; i < 80; i++) {
            ellipse = Phaser.Geom.Ellipse.Clone(ellipse);
            ellipse.width += 1.5;
            ellipse.height += 0.7;

            Phaser.Geom.Ellipse.CircumferencePoint(ellipse, i / 20 * Phaser.Math.PI2, ellipse);

            ellipses.push(ellipse);
        }
    }

    update() {
        graphics.clear();

        for (var i = 0; i < ellipses.length; i++) {
            ellipses[i].width += 1.5;
            ellipses[i].height += 0.7;

            if (ellipses[i].width > 800) {
                ellipses[i].width = 0;
                ellipses[i].height = 0;
            }

            graphics.strokeEllipseShape(ellipses[i]);
        }
    }
}
