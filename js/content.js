'use strict'

// 要素を取得
const insertElement = document.querySelector('.st-Header_end')
const stockAnker = document.querySelector('.st-Header_stock')
const lgtmAnker = document.createElement('a')
const lgtmText = document.createElement('span')

// ドロップダウンメニューからマイページへのURLを取得
const dropdown = document.querySelector('.st-Header_end .st-Header_dropdown')
const mypageUrl = dropdown.querySelector('.st-Header_dropdownItem').getAttribute('href')

// 表示要素の設定
lgtmText.innerText = "LGTM一覧"
lgtmText.setAttribute('class', 'st-Header_lgtms_label')
lgtmAnker.setAttribute('href', mypageUrl + '/lgtms')
lgtmAnker.setAttribute('class', 'st-Header_lgtms mr-2 py-2')
lgtmAnker.append(lgtmText)

// 要素をヘッダの際初に挿入
insertElement.insertBefore(lgtmAnker, stockAnker)
