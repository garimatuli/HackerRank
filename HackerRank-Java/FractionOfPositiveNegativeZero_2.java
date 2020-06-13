
// Que Link : https://www.hackerrank.com/challenges/plus-minus/problem
// Author : Garima Tuli

import java.io.*;

public class FractionOfPositiveNegativeZero_2 {
    static void plusMinus(int[] arr) {
        int k = arr.length ;
        double positives = 0, negatives = 0, zeroes = 0;

        // Using Enhanced For loop
        for (int i : arr) {
            if (i < 0)
                negatives++;
            else if (i > 0)
                positives++;
            else
                zeroes++;
        }

        System.out.printf("%.6f %n" , positives / k);
        System.out.printf("%.6f %n" , negatives / k);
        System.out.printf("%.6f %n" , zeroes/k);
    }

    public static void main(String[] args) {
        int arr[] = new int[]{-4 , 3, -9, 0, 4, 1};
        // or int arr[] = {-4 , 3, -9, 0, 4, 1};
        plusMinus(arr);
    }
}
