# Как выложить страницу на github pages

1. Создайте папку на компьютере с проектом и кодом (index.html, styles.css и т.д.)
2. Зайдите на github в браузере и создайте пустой репозиторий.
(для этого: ваш профиль -> repositories -> зелена кнопка new
-> задаем имя репозитория `Repository name` ->
css-intro -> зеленая кнопка `Create repository`
)
3. Инициировать локальный репозиторий. Для этого, ввести в VSCode команду git init (важной быть в открытой папке, чтобы имя вашего проекта было большими буквами). Внутри папки вашего проекта появится скрытая папочка .git
4. Мы копируем команды в браузере из предложенных:
``(не забудьте git add, и заменить отличающуюся часть в git remote )``
```
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:<отличающаяяся часть>
git push -u origin main
```

5. Теперь осталось только опубликовать на gitPages
Заходим в репозиторий в бразуере -> settings ->
в левом сайдбаре Pages -> выбираем branch с `none` на `main` -> нажимаем save -> ссылка появится через некоторое время (можно обовлять страничку)