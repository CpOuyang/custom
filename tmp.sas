data test;
do i = 1 to 100;
    var = ranuni(123);
    output;
end;
drop i;
run;

proc means data=test noprint;
output out=stat q1=q1;
run;

data _null_;
set stat;
call symputx("Q1", q1);
run;

%put ===第一四分位數在這: &q1.===;
