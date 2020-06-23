// Question : https://www.hackerrank.com/challenges/staircase/problem

import java.util.Scanner;

public class rightAlignedStaircase {

    static void staircase(int n) {
        for (int i =1 ; i <= n; i++){
            for (int j = n-i ; j >= 1; j--){
                System.out.print(" ");
            }
            for (int k =1 ; k <= i; k++){
                System.out.print("#");
            }
            System.out.println();
        }
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main (String args[]) {
        //staircase(5);

        System.out.print("Enter a number : ");

        int n = scanner.nextInt();
        // https://stackoverflow.com/questions/52111077/explain-this-line-written-in-java
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        staircase(n);

        scanner.close();
    }
}
