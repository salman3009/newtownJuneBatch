public class tuna3{
private String girlname;

public tuna3(String name){
      girlname = name;
}
public void setname(String name){
        girlname = name;
}
public String getname(){
       return girlname;
}
public void saying(){
System.out.printf("your first gf was %s\n",getname());
}
}