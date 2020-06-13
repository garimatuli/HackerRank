
// Que Link : https://www.hackerrank.com/challenges/plus-minus/problem
// Author : Garima Tuli

import java.text.*;

public class FractionOfPositiveNegativeZero {
    static void plusMinus(int[] arr) {
        int k = arr.length;
        int positives = 0, negatives = 0, zeroes = 0;
        for (int i = 0; i < k; i++) {
            if (arr[i] < 0)
                negatives++;
            else if (arr[i] > 0)
                positives++;
            else
                zeroes++;
        }

        double fractionOfPositives = (double) positives / k;
        int places = 6;
        double scale = Math.pow(10, places);

        double fractionOfNegatives = (double) negatives / k;
        DecimalFormat df = new DecimalFormat("#.######");

        System.out.println(Math.round(fractionOfPositives * scale) / scale);
        System.out.println(df.format(fractionOfNegatives));
        System.out.println(df.format((double) zeroes / k));
    }

    public static void main(String[] args) {
        int arr[] = new int[]{-4 , 3, -9, 0, 4, 1};
        // or int arr[] = {-4 , 3, -9, 0, 4, 1};
        plusMinus(arr);
    }
}
