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

local shortValueDec
function E:ShortValue(v)
	shortValueDec = format("%%.%df", E.db.general.decimalLength or 1)
	if E.db.general.numberPrefixStyle == "METRIC" then
		if abs(v) >= 1e9 then
			return format(shortValueDec.."G", v / 1e9)
		elseif abs(v) >= 1e6 then
			return format(shortValueDec.."M", v / 1e6)
		elseif abs(v) >= 1e3 then
			return format(shortValueDec.."k", v / 1e3)
		else
			return format("%s", v)
		end
	elseif E.db.general.numberPrefixStyle == "CHINESE" then
		if abs(v) >= 1e8 then
			return format(shortValueDec.."億", v / 1e8)
		elseif abs(v) >= 1e4 then
			return format(shortValueDec.."萬", v / 1e4)
		else
			return format("%s", v)
		end
	elseif E.db.general.numberPrefixStyle == "KOREAN" then
		if abs(v) >= 1e8 then
			return format(shortValueDec.."억", v / 1e8)
		elseif abs(v) >= 1e4 then
			return format(shortValueDec.."만", v / 1e4)
		elseif abs(v) >= 1e3 then
			return format(shortValueDec.."천", v / 1e3)
		else
			return format("%s", v)
		end
	elseif E.db.general.numberPrefixStyle == "GERMAN" then
		if abs(v) >= 1e9 then
			return format(shortValueDec.."Mrd", v / 1e9)
		elseif abs(v) >= 1e6 then
			return format(shortValueDec.."Mio", v / 1e6)
		elseif abs(v) >= 1e3 then
			return format(shortValueDec.."Tsd", v / 1e3)
		else
			return format("%s", v)
		end
	else
		if abs(v) >= 1e9 then
			return format(shortValueDec.."B", v / 1e9)
		elseif abs(v) >= 1e6 then
			return format(shortValueDec.."M", v / 1e6)
		elseif abs(v) >= 1e3 then
			return format(shortValueDec.."K", v / 1e3)
		else
			return format("%s", v)
		end
	end
end
