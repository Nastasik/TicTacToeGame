type GetIsWinProps = {
    arr: string[][],
    x: number, 
    y: number,
}

export const getIsWin = ({ x, y, arr }: GetIsWinProps) => {
    let player=arr[y][x]
    const coords = {}

    const checkLine = (x: number, y: number, dx: number, dy: number, minus?: boolean) => {
        let count = 0

        if(arr[y] && player === arr[y][x] && y<arr.length && x<arr.length && y>=0 && x>=0) {
            count++
            count+= minus ? checkLine(x-dx, y-dy, dx, dy, true) : checkLine(x+dx, y+dy, dx, dy)
            //@ts-ignore
            coords[count] = JSON.stringify({x, y, p: arr[y][x]})
        }
        
        return count
    }
    console.log(coords, 'coords')
    const checkCount = (item: number) => item >= 5
  
    let hor  = checkCount(checkLine(x, y, 1, 0))
    let horB = checkCount(checkLine(x, y, 1, 0, true))
    let diag1  = checkCount(checkLine(x, y, 1, 1))
    let diag1B  = checkCount(checkLine(x, y, 1, 1, true))
    let diag2  = checkCount(checkLine(x, y, 1, -1))
    let diag2B  = checkCount(checkLine(x, y, 1, -1, true))
    let vert  = checkCount(checkLine(x, y, 0, 1))
    let vertB  = checkCount(checkLine(x, y, 0, 1, true))

    const isWin = hor||horB||diag1||diag1B||diag2||diag2B||vert||vertB
    return  { isWin, coords }
}