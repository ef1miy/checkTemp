function checkTemp(temp) {
    t = Number(temp)
    if (t<=20) return -1;
	if (t<=40 && t>=21) return 0;
	else {
		return 1;
	}
}
ans= checkTemp(8)
console.log(ans)
