function Skada:FormatNumber(number)
	if number then
		if self.db.profile.numberformat == 1 then
			if number > 10e8 then
				return ("%02.1f億"):format(number / 1e8)
			elseif number > 1e8 then
				return ("%02.2f億"):format(number / 1e8)
			elseif number > 10e4 then
				return ("%02.0f萬"):format(number / 1e4)
			elseif number > 1e4 then
				return ("%02.1f萬"):format(number / 1e4)
			else
				return math.floor(number)
			end
		else
			return math.floor(number)
		end
	end
end
