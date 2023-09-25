// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`2000200001010101010101010101010101010101000000000000000000000000000000000100000000000000000000000000000100000000000000000000000000000000010202020202000000000002020202010000000000000000000000000000000001000000000000000000000000000001000000000000000000000000000000000100000000000000000000000000000100000000000000000000000000000000010000000000000000000000000000010000000000000000000000000000000001000000000002020202020000000001000000000000000000000000000000000102020000000000000000000000000100000000000000000000000000000000010000000000000000000000000000010000000000000000000000000000000001000000000000000000020202020001000000000000000000000000000000000100000000020000000000000000000100000000000000000000000000000000010000000002000000000000000200010000000000000000000000000000000001000000000200000000000000020201000000000000000000000000000000000100000000020000000000000000000100000000000000000000000000000000010000000002000000000000000000010000000000000000000000000000000001010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2222222222222222................
2..............2................
222222.....22222................
2..............2................
2..............2................
2..............2................
2.....22222....2................
222............2................
2..............2................
2.........2222.2................
2....2.........2................
2....2.........2................
2....2.........2................
2....2.........2................
2....2.........2................
2222222222222222................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
