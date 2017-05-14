function Skada:FormatNumber(number)
	if number then
		if self.db.profile.numberformat == 1 then
			if number > 100000000 then
				return ("%02.1f億"):format(number / 100000000)
			elseif number > 10000 then
				return ("%02.1f萬"):format(number / 10000)
			else
				return ("%02.1f千"):format(number / 1000)
			end
		else
			return math.floor(number)
		end
	end
end
