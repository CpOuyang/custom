function comma_value(amount)
	local formatted = amount
	while true do  
		formatted, k = string.gsub(formatted, "^(-?%d+)(%d%d%d)", '%1,%2')
		if (k==0) then
			break
		end
	end
	return formatted
end

--Return short value of a number
function E:ShortValue(v)
	if E.db.general.numberPrefixStyle == "METRIC" then
		if abs(v) >= 1e9 then
			return format("%.1fG", v / 1e9)
		elseif abs(v) >= 1e6 then
			return format("%.1fM", v / 1e6)
		elseif abs(v) >= 1e3 then
			return format("%.1fk", v / 1e3)
		else
			return format("%d", v)
		end
	elseif E.db.general.numberPrefixStyle == "CHINESE" then
		if abs(v) >= 10e8 then
			return format("%.1f億", v / 1e8)
		elseif abs(v) >= 1e8 then
			return format("%.2f億", v / 1e8)
		elseif abs(v) >= 10e4 then
			return format("%.0f萬", v / 1e4)
		elseif abs(v) >= 1e4 then
			return format("%.1f萬", v / 1e4)
		else
			return format("%d", v)
		end
--		return comma_value(v)
	else
		if abs(v) >= 1e9 then
			return format("%.1fB", v / 1e9)
		elseif abs(v) >= 1e6 then
			return format("%.1fM", v / 1e6)
		elseif abs(v) >= 1e3 then
			return format("%.1fK", v / 1e3)
		else
			return format("%d", v)
		end
	end
end

