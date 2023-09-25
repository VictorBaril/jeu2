// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000303000000010100000000000000000003030000000101000000000000000000030300000001010303030303000000000303000000010100000000000000000003030000000101000000000000000000030300000001010003000000000000000000000000010100030000000000000000000000000101000300000000000000000000030001010003000002020202020200000300010100030000020202020202000003000101000000000000000000000000030001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
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
