<?php 

function MinWindowSubstring($strArr) {

  $s = $strArr[0];
  $t = $strArr[1];

  $len_s = strlen($s);
  $len_t = strlen($t);

  $hasil = '';

  if($s==$t) {
    return $t;
  } else if (empty($s) || empty($t) || $len_s<$len_t) {
    $hasil = '';
  } else {
      $hasil = '';
      $have = $need = [];
      $left = $right = $match = $need_match = 0;
      //echo $t[$len_t-1];
  
      for ($i=0; $i<$len_t-1; $i++) {        
        $need[$t[$i]]++;
      }

      $need_match = count($need);
      $min = PHP_INT_MAX;

      while ($right < $len_s) {
        $r_str = $s[$right];
        
        if (isset($have[$r_str])) {
          $have[$r_str]++;
        } else {
          $have[$r_str] = 1;
        }

        if ($have[$r_str] == $need[$r_str]) {
          $match++;
        }

        while ($match >= $need_match){
          $res_len = $right - $left + 1;
          if ($res_len < $min) {
            $min = $res_len;
            $hasil = substr($s, $left, $min);
          }
          $l_str = $s[$left];
          $have[$l_str]--;
          if ($have[$l_str] == $need[$l_str]-1) {
            $match--;
          }
          $left++;
        }

        $right++;
      }

  }

  return $hasil;

}
   
// keep this function call here  
echo MinWindowSubstring(fgets(fopen('php://stdin', 'r')));  

?>