{
    ["databars"] = {
        ["azerite"] = {
            ["orientation"] = "HORIZONTAL",
            ["textFormat"] = "CURPERC",
            ["height"] = 10,
            ["width"] = 220,
        },
        ["experience"] = {
            ["orientation"] = "HORIZONTAL",
            ["textFormat"] = "CURPERC",
            ["height"] = 10,
            ["width"] = 220,
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["currentTutorial"] = 12,
    ["sle"] = {
        ["Armory"] = {
            ["Character"] = {
                ["Enable"] = false,
            },
            ["Inspect"] = {
                ["Enable"] = false,
            },
        },
    },
    ["movers"] = {
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,280",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-300",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["GMMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-13",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,193",
        ["LootFrameMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-114",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,130",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ElvUF_FocusMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-500,-430",
        ["DurabilityFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-385,-203",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,272",
        ["ElvUF_TargetTargetMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-475,300",
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,120,820",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,247",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-315,200",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,352",
        ["ElvUIBagMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["AzeriteBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,348",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,247",
        ["VehicleLeaveButton"] = "BOTTOM,ElvUIParent,BOTTOM,-235,132",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-140,-212",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["VOICECHAT"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-91",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,281",
        ["TooltipMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-7,7",
        ["ElvUF_TankMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,868",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["TotemBarMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,486,64",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,300",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,410,400",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,300",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,747",
    },
    ["bags"] = {
        ["junkIcon"] = true,
        ["vendorGrays"] = {
            ["enable"] = true,
        },
        ["countFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bagSize"] = 40,
        ["bagWidth"] = 440,
        ["countFontSize"] = 12,
    },
    ["hideTutorial"] = true,
    ["auras"] = {
        ["debuffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
        ["buffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
    },
    ["unitframe"] = {
        ["fontSize"] = 14,
        ["colors"] = {
            ["colorhealthbyvalue"] = false,
            ["healthclass"] = true,
        },
        ["smartRaidFilter"] = false,
        ["smoothbars"] = true,
        ["fontOutline"] = "NONE",
        ["units"] = {
            ["pet"] = {
                ["colorOverride"] = "FORCE_OFF",
                ["buffs"] = {
                    ["attachTo"] = "DEBUFFS",
                },
                ["castbar"] = {
                    ["enable"] = false,
                    ["width"] = 130,
                },
            },
            ["tank"] = {
                ["enable"] = false,
                ["width"] = 84,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 56,
                ["verticalSpacing"] = 3,
            },
            ["party"] = {
                ["debuffs"] = {
                    ["sizeOverride"] = 0,
                },
                ["buffs"] = {
                    ["enable"] = true,
                },
                ["power"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["health"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMLEFT",
                },
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["width"] = 144,
                ["name"] = {
                    ["yOffset"] = 8,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel]",
                    ["position"] = "TOPLEFT",
                },
                ["height"] = 36,
                ["verticalSpacing"] = 6,
            },
            ["arena"] = {
                ["enable"] = false,
            },
            ["targettarget"] = {
                ["power"] = {
                    ["enable"] = false,
                },
                ["width"] = 100,
                ["height"] = 28,
                ["name"] = {
                    ["xOffset"] = 2,
                    ["yOffset"] = 14,
                    ["text_format"] = "[name:short]",
                    ["position"] = "TOPRIGHT",
                },
            },
            ["target"] = {
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["width"] = 220,
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[health:current] || [perhp]%",
                    ["position"] = "BOTTOMLEFT",
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["position"] = "TOPRIGHT",
                    ["xOffset"] = 8,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel] [shortclassification]",
                    ["yOffset"] = 18,
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPLEFT",
                },
            },
            ["boss"] = {
                ["enable"] = false,
                ["width"] = 180,
                ["height"] = 60,
            },
            ["raid40"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["enable"] = false,
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["enable"] = true,
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["groupSpacing"] = 3,
                ["power"] = {
                    ["enable"] = true,
                },
                ["width"] = 84,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 56,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
                ["verticalSpacing"] = 1,
            },
            ["assist"] = {
                ["enable"] = false,
                ["width"] = 84,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 56,
                ["verticalSpacing"] = 3,
            },
            ["raid"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["fontOutline"] = "OUTLINE",
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["resurrectIcon"] = {
                    ["enable"] = false,
                },
                ["groupSpacing"] = 3,
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["width"] = 96,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 56,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
                ["verticalSpacing"] = 1,
            },
            ["player"] = {
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["width"] = 220,
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[perhp]% || [health:current]",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPRIGHT",
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["yOffset"] = 24,
                    ["text_format"] = "[name]",
                    ["position"] = "TOPLEFT",
                },
            },
        },
    },
    ["chat"] = {
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["panelWidth"] = 480,
        ["tabFontSize"] = 14,
        ["panelTabBackdrop"] = true,
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["fontSize"] = 16,
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["bar2"] = {
            ["buttonsize"] = 40,
            ["enabled"] = true,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["bar6"] = {
            ["buttonsize"] = 40,
        },
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["itemLevel"] = {
            ["displayCharacterInfo"] = false,
            ["displayInspectInfo"] = false,
        },
        ["objectiveFrameHeight"] = 720,
        ["bordercolor"] = {
            ["b"] = 0,
            ["g"] = 0,
            ["r"] = 0,
        },
        ["autoRepair"] = "GUILD",
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
    },
    ["v11NamePlateReset"] = true,
    ["thinBorderColorSet"] = true,
    ["AuraWatch"] = {
        ["loadDefault"] = true,
        ["myclass"] = "HUNTER",
        ["DB"] = {
            [1] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家减益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 118,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 10,
                ["Mode"] = "ICON",
                ["IconSize"] = 48,
                ["Pos"] = {
                    [1] = "CENTER",
                    [2] = "UIParent",
                    [3] = "CENTER",
                    [4] = -200,
                    [5] = 200,
                },
            },
            [2] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家重要增益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 82925,
                        ["UnitID"] = "player",
                    },
                    [2] = {
                        ["AuraID"] = 82926,
                        ["UnitID"] = "player",
                    },
                    [3] = {
                        ["AuraID"] = 53220,
                        ["UnitID"] = "player",
                    },
                    [4] = {
                        ["AuraID"] = 56453,
                        ["UnitID"] = "player",
                    },
                    [5] = {
                        ["AuraID"] = 34720,
                        ["UnitID"] = "player",
                    },
                    [6] = {
                        ["AuraID"] = 19623,
                        ["UnitID"] = "player",
                    },
                    [7] = {
                        ["AuraID"] = 136,
                        ["UnitID"] = "pet",
                    },
                    [8] = {
                        ["AuraID"] = 126697,
                        ["UnitID"] = "player",
                    },
                    [9] = {
                        ["AuraID"] = 126649,
                        ["UnitID"] = "player",
                    },
                    [10] = {
                        ["AuraID"] = 126599,
                        ["UnitID"] = "player",
                    },
                    [11] = {
                        ["AuraID"] = 126554,
                        ["UnitID"] = "player",
                    },
                    [12] = {
                        ["AuraID"] = 126690,
                        ["UnitID"] = "player",
                    },
                    [13] = {
                        ["AuraID"] = 126707,
                        ["UnitID"] = "player",
                    },
                    [14] = {
                        ["AuraID"] = 125489,
                        ["UnitID"] = "player",
                    },
                    [15] = {
                        ["AuraID"] = 109092,
                        ["UnitID"] = "player",
                    },
                    [16] = {
                        ["AuraID"] = 109085,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 6,
                ["Mode"] = "ICON",
                ["IconSize"] = 42,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Player",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 55,
                },
            },
            [3] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "玩家增益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 19263,
                        ["UnitID"] = "player",
                    },
                    [2] = {
                        ["AuraID"] = 3045,
                        ["UnitID"] = "player",
                    },
                    [3] = {
                        ["AuraID"] = 34471,
                        ["UnitID"] = "player",
                    },
                    [4] = {
                        ["AuraID"] = 82692,
                        ["UnitID"] = "player",
                    },
                    [5] = {
                        ["AuraID"] = 90361,
                        ["UnitID"] = "player",
                    },
                },
                ["Interval"] = 6,
                ["Mode"] = "ICON",
                ["IconSize"] = 42,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Player",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 12,
                },
            },
            [4] = {
                ["Direction"] = "RIGHT",
                ["Name"] = "目标减益",
                ["List"] = {
                    [1] = {
                        ["AuraID"] = 1130,
                        ["UnitID"] = "target",
                        ["Caster"] = "all",
                    },
                    [2] = {
                        ["AuraID"] = 1978,
                        ["UnitID"] = "target",
                        ["Caster"] = "player",
                    },
                    [3] = {
                        ["AuraID"] = 3674,
                        ["UnitID"] = "target",
                        ["Caster"] = "player",
                    },
                    [4] = {
                        ["AuraID"] = 53301,
                        ["UnitID"] = "target",
                        ["Caster"] = "player",
                    },
                },
                ["Interval"] = 4,
                ["Mode"] = "ICON",
                ["IconSize"] = 48,
                ["Pos"] = {
                    [1] = "BOTTOMLEFT",
                    [2] = "ElvUF_Target",
                    [3] = "TOPLEFT",
                    [4] = 0,
                    [5] = 68,
                },
            },
        },
    },
}::profile::Cipherblade
