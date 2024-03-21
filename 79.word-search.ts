/*
 * @lc app=leetcode.cn id=79 lang=typescript
 * @lcpr version=30113
 *
 * [79] 单词搜索
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function exist(board: string[][], word: string): boolean {
    for(let i = 0; i < board.length ; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                // console.log(i , j)
                if(dfs(board, word, 0, {i, j}, Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false)))) {
                    return true;
                }
            }
        }
    }
    return false;
};
function dfs(board: string[][], word: string,word_index: number , pos: { i: number, j: number}, hasViewed: boolean[][]): boolean {
        // judge the pos is correct
    if(pos.i < 0 || pos.i >= board.length || pos.j < 0 || pos.j > board[0].length) return false;
    if(hasViewed[pos.i][pos.j]) return false;

    if(word[word_index] !== board[pos.i][pos.j]) return false;
    if(word_index >= word.length) return false;
    if(word_index === word.length - 1) return true;

    hasViewed[pos.i][pos.j] = true;
    // console.log(board[pos.i][pos.j] , word[word_index], word_index,{...pos})
    

    let res =  dfs(board, word, word_index+1, {i: pos.i - 1, j: pos.j},hasViewed) 
    res = res || dfs(board, word, word_index+1, {i: pos.i + 1, j: pos.j},hasViewed) 
    res = res || dfs(board, word, word_index+1, {i: pos.i, j: pos.j - 1 },hasViewed) 
    res = res || dfs(board, word, word_index+1, {i: pos.i, j: pos.j + 1},hasViewed);


    hasViewed[pos.i][pos.j] = false
    return res
}

// console.log(exist([["F","R","D","R"],["E","A","D","F"]],"RFEADFRD"));
// @lc code=end



/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */

