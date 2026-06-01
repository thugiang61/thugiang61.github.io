  #!/usr/bin/env sh

set -e

yarn build 

cd dist

git init
git add -A
git commit -m 'Commit dist folder'
# bị lỗi authen khi dùg ssh nên là chuyển sang dùg https url r đnhap thủ công thì đc
# git push -f git@github.com:thugiang61/thugiang61.github.io.git master:gh-pages
git push -f https://github.com/thugiang61/thugiang61.github.io.git master:gh-pages

cd -