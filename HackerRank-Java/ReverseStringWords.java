// Reverse Strings as shown below
// Input = "United States of America"
// Output = "America of States United"

public class ReverseStringWords {

    public static StringBuilder myTest() {
        String str = "United States of America";
       String strArr[] = str.split(" ");

//       for (String s: strArr){
//           System.out.println(s);
//       }

       StringBuilder sb = new StringBuilder();

       for (int i = strArr.length - 1; i >= 0 ; i--){
           sb.append(strArr[i]).append(" ");
       }

       // System.out.println(sb);
       return sb;
    }


    public static void main(String args[]) {
        StringBuilder output = myTest();
        System.out.println(output);
    }

}
