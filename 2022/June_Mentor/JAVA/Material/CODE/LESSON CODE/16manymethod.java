import java.util.Scanner;

class manymethod{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
tuna2 tunaobject = new tuna2();
System.out.println("enter the name here ");
String temp = input.nextLine();
tunaobject.setname(temp);
tunaobject.saying();

}

}