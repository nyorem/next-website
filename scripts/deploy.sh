#! /usr/bin/env sh

set -e
rm -rf out
yarn build && yarn export
cd out

# see: https://github.com/vercel/next.js/issues/3335#issuecomment-348747078
touch .nojekyll

echo "meyronj.com" > CNAME

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:nyorem/nyorem.github.io.git master

cd -
