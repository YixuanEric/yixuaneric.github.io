# JS 实现 KMP 算法

在做 leetcode 28 implement strStr()的时候，要写一个 KMP 算法。
参考了Youtube的一个视频和阮一峰的KMP算法简介。

主要是要把prefixArray给生成，然后在匹配，达到一个线性事件复杂度。

```
function findStr(text, pattern) {

    function getPrefixArray(pattern) {
        let i = 0
        let j = 1
        let result = new Array(pattern.length).fill(0)
        while (j < pattern.length) {
            if (pattern[i] == pattern[j]) {
                result[j] = i + 1
                i++
            } else {
                while (i > 0) {
                    i = result[i - 1]
                    if (pattern[i] == pattern[j]) {
                        i++
                        break
                    }
                }
                result[j] = i == 0 ? 0 : i + 1
            }
            j++
        }
        return result
    }

    function kmp(pattern, text) {
        const prefixArray = getPrefixArray(pattern)
        let index = 0
        let alreadyMatched = 0
        while (index < text.length) {
            if (alreadyMatched == pattern.length) {
                return index
            }
            else if (pattern[alreadyMatched] == text[index + alreadyMatched]) {
                //console.log("match a char", index)
                alreadyMatched += 1
            }
            else {
                if (alreadyMatched == 0) {
                    index += 1
                }
                else {
                    let move = alreadyMatched - prefixArray[alreadyMatched - 1]
                    index += move
                }
                alreadyMatched = 0
            }
        }
        return -1
    }
    if (!text && !pattern) {
        return 0
    }
    return kmp(pattern, text)
};
```
