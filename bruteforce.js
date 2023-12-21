let str1 = '66';
let str2 = '6655555556466';
for (i = 0; i < str2.length - str1.length;i++)
{
	var count = 0;
	for (j = 0; j < str1.length;j++)
		if (str1[j] = str2[i + j])
			count++;
	if (count == str1.length)
	{
		console.log(true);
		return;
	}
}
//выводит true, если строка str1 содержится в str2
//выводит false, если строка str1 не содержится в str2
console.log(false);
