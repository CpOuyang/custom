{
    ["backdropColor"] = {
        [1] = 1,
        [2] = 1,
        [3] = 1,
        [4] = 0.5,
    },
    ["controlledChildren"] = {
        [1] = "白金礦石",
        [2] = "蒙那萊礦石",
        [3] = "風暴白銀礦石",
        [4] = "奧司曼礦石",
        [5] = "海莖草",
        [6] = "亞昆達之噬",
        [7] = "河芽草",
        [8] = "海妖花粉",
        [9] = "星苔",
        [10] = "冬吻花",
        [11] = "錨草",
        [12] = "辛葵",
    },
    ["borderBackdrop"] = "Blizzard Tooltip",
    ["xOffset"] = 420,
    ["border"] = false,
    ["borderEdge"] = "None",
    ["regionType"] = "group",
    ["borderSize"] = 16,
    ["borderColor"] = {
        [1] = 1,
        [2] = 1,
        [3] = 1,
        [4] = 0.5,
    },
    ["animation"] = {
        ["start"] = {
            ["type"] = "none",
            ["duration_type"] = "seconds",
        },
        ["main"] = {
            ["type"] = "none",
            ["duration_type"] = "seconds",
        },
        ["finish"] = {
            ["type"] = "none",
            ["duration_type"] = "seconds",
        },
    },
    ["actions"] = {
        ["start"] = {
        },
        ["init"] = {
        },
        ["finish"] = {
        },
    },
    ["triggers"] = {
        [1] = {
            ["trigger"] = {
                ["type"] = "aura2",
                ["subeventSuffix"] = "_CAST_START",
                ["event"] = "Health",
                ["subeventPrefix"] = "SPELL",
                ["spellIds"] = {
                },
                ["names"] = {
                },
                ["unit"] = "player",
                ["debuffType"] = "HELPFUL",
            },
            ["untrigger"] = {
            },
        },
    },
    ["authorOptions"] = {
    },
    ["borderOffset"] = 5,
    ["yOffset"] = -450,
    ["selfPoint"] = "BOTTOMLEFT",
    ["id"] = "Herb",
    ["anchorPoint"] = "CENTER",
    ["frameStrata"] = 1,
    ["anchorFrameType"] = "SCREEN",
    ["uid"] = "QrAJ5MHCkX9",
    ["config"] = {
    },
    ["scale"] = 1,
    ["internalVersion"] = 26,
    ["conditions"] = {
    },
    ["load"] = {
        ["use_class"] = false,
        ["spec"] = {
            ["multi"] = {
            },
        },
        ["class"] = {
            ["multi"] = {
            },
        },
        ["size"] = {
            ["multi"] = {
            },
        },
    },
    ["borderInset"] = 11,
}
