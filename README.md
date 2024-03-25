# Battleship - The Odin Project

This is a simple implementation of the classic game Battleship. It is a project from The Odin Project's curriculum.

## Notes

### Gameboard

```javascript
this.board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
```

```
0 = empty space
1 = ship
2 = miss
3 = hit
```

```javascript
this.ships = [
  Ship(4),
  Ship(3),
  Ship(3),
  Ship(2),
  Ship(2),
  Ship(2),
  Ship(1),
  Ship(1),
  Ship(1),
  Ship(1),
];
```

### Ship

```javascript
hit() { this.numberOfHits++ };

isSunk() {}

setCoordinates(coordinate, orientation) {}
```
