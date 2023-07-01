public class Main {
  /*
    Создать программу для бухгалтерии, которая будет уметь следующее:
    - добавлять сотрудников в штат
    - удалять сотрудников из штата
    - рассчитывать зарплату для двух категорий сотрудников
                -сотрудник с почасовой оплатой
                -менеджер по продажам

     У программы должны быть следующие классы :
      классы сотрудников : абстрактный родительский класс Employee
                           сотрудник на зарплате WageEmployee
                           менеджер по продажам  SalesManager
        У сотрудников должны быть такие поля :
            id, имя, фамилия ,год рождения, количество проработанных часов
            и метод для расчета зарплаты ( calculateSalary)
        У сотрудника на почасовой оплате должно быть поле ставка за час. Метод расчета его зарплаты должен
        учитывать минимальный размер оплаты труда
        У менеджера по продажам нет фиксированной оплаты, его зарплата рассчитывается ка процент от обьема продаж.
        Но его метод оплаты также должен учитывать минимальный размер оплаты труда
        private double salesVolume
        private double percent

      класс Company, имеющий методы для :
                        -добавления сотрудника ( addEmployee),
                        -удаления сотрудника ( removeEmployee)
                        -вывода на экран списка сотрудников ( display)
                        -суммирования зарплат всех сотрудников (sumSalary)
                        -сортировки сотрудников по фамилии  (sortEmployees)
   */
}
