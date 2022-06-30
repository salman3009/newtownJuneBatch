import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class tuna11 extends JFrame{

                private JLabel item1;
				
	public tuna11()
	{
	    super("The title bar");
	    setLayout(new FlowLayout());
		
		item1 = new JLabel("this is a sentence");
		
		item1.setToolTipText("This gona show up on hover");
		
		add(item1);
	
	}
}