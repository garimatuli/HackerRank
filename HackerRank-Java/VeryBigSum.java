// Que Link : https://www.hackerrank.com/challenges/a-very-big-sum/problem
// Author : Garima Tuli

import java.io.*;

public class VeryBigSum {

    static long aVeryBigSum(long[] ar) {
        long sumTotal = 0;
        for (long i :  ar ){
            sumTotal = sumTotal + i;
        }
        return sumTotal;
    }

    public static void main(String args[]) throws IOException{
        long ar[] = new long[] {1000000001,1000000002,1000000003, 1000000004,1000000005};
        System.out.println(aVeryBigSum(ar));
    }
}
