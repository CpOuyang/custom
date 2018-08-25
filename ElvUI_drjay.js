{
    ["databars"] = {
        ["artifact"] = {
            ["height"] = 10,
            ["textFormat"] = "CURREM",
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["experience"] = {
            ["orientation"] = "HORIZONTAL",
            ["textFormat"] = "CURPERC",
            ["height"] = 10,
            ["width"] = 220,
        },
        ["azerite"] = {
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
    ["general"] = {
        ["fontSize"] = 14,
        ["vendorGrays"] = true,
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
        ["decimalLength"] = 2,
        ["objectiveFrameHeight"] = 720,
        ["topPanel"] = false,
        ["numberPrefixStyle"] = "CHINESE",
    },
    ["movers"] = {
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,280",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,140,700",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["GMMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-13",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,226",
        ["LootFrameMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-114",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,289",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ElvUF_FocusMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-500,-430",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,247",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,272",
        ["ElvUF_TargetTargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,186,143",
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,120,820",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,352",
        ["AzeriteBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,263",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,247",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,186,200",
        ["ElvAB_4"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-351,-23",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-65,-264",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["VOICECHAT"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-91",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,186,181",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["TotemBarMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,486,64",
        ["ElvUF_TankMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,868",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,200",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,143",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,420,500",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,747",
    },
    ["bags"] = {
        ["junkIcon"] = true,
        ["ignoredItems"] = {
            ["n:上將的指南針"] = "n:上將的指南針",
            ["n:吉福斯"] = "n:吉福斯",
            ["tt:爐石"] = "tt:爐石",
            ["tt:哨子"] = "tt:哨子",
        },
        ["countFontSize"] = 12,
        ["countFontOutline"] = "OUTLINE",
        ["bagSize"] = 38,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["bagWidth"] = 400,
    },
    ["chat"] = {
        ["panelTabBackdrop"] = true,
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["font"] = "聊天",
        ["tabFontSize"] = 14,
        ["panelWidth"] = 480,
    },
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
    ["unitframe"] = {
        ["fontSize"] = 16,
        ["colors"] = {
            ["colorhealthbyvalue"] = false,
            ["healthclass"] = true,
        },
        ["fontOutline"] = "NONE",
        ["smoothbars"] = true,
        ["units"] = {
            ["pet"] = {
                ["colorOverride"] = "FORCE_OFF",
                ["buffs"] = {
                    ["attachTo"] = "DEBUFFS",
                },
                ["castbar"] = {
                    ["enable"] = false,
                },
            },
            ["tank"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["enable"] = false,
                ["width"] = 84,
                ["height"] = 56,
                ["verticalSpacing"] = 3,
            },
            ["targettarget"] = {
                ["name"] = {
                    ["text_format"] = "[name:medium]",
                },
            },
            ["target"] = {
                ["width"] = 220,
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["name"] = {
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel] [shortclassification]",
                },
                ["health"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["height"] = 64,
                ["buffs"] = {
                    ["sizeOverride"] = 0,
                },
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["aurabar"] = {
                    ["enable"] = false,
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
                    ["xOffset"] = 30,
                    ["enable"] = true,
                    ["yOffset"] = -50,
                },
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
                ["verticalSpacing"] = 1,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["xOffset"] = 30,
                    ["enable"] = true,
                    ["yOffset"] = -16,
                },
            },
            ["assist"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["verticalSpacing"] = 3,
                ["height"] = 56,
                ["width"] = 84,
            },
            ["raid"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["xOffset"] = 30,
                    ["enable"] = true,
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
                ["raidWideSorting"] = false,
                ["healPrediction"] = true,
                ["width"] = 84,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 56,
                ["verticalSpacing"] = 1,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["xOffset"] = 30,
                    ["enable"] = true,
                    ["yOffset"] = -16,
                },
            },
            ["party"] = {
                ["debuffs"] = {
                    ["sizeOverride"] = 0,
                },
                ["power"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["width"] = 144,
                ["buffs"] = {
                    ["enable"] = true,
                },
                ["name"] = {
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel]",
                },
                ["health"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 48,
                ["verticalSpacing"] = 1,
            },
            ["player"] = {
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["width"] = 220,
                ["health"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 64,
            },
        },
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["bar6"] = {
            ["buttonsize"] = 40,
        },
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["raidmarkersbar"] = {
            ["visible"] = "show",
            ["scale"] = 1.2,
        },
        ["bar4"] = {
            ["point"] = "BOTTOMLEFT",
            ["buttonsize"] = 60,
            ["backdrop"] = false,
            ["showGrid"] = false,
        },
        ["bar2"] = {
            ["enabled"] = true,
            ["buttonsize"] = 40,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["fontSize"] = 16,
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
        ["backdropSpacingConverted"] = true,
    },
    ["nameplates"] = {
        ["targetGlow"] = "style1",
        ["fontSize"] = 14,
        ["cooldown"] = {
            ["fonts"] = {
                ["font"] = "EUI",
            },
        },
        ["units"] = {
            ["ENEMY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["FRIENDLY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                },
            },
            ["PLAYER"] = {
                ["debuffs"] = {
                    ["enable"] = false,
                },
                ["buffs"] = {
                    ["enable"] = false,
                },
                ["enable"] = true,
            },
            ["ENEMY_PLAYER"] = {
                ["healthbar"] = {
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
        },
        ["glowColor"] = {
            ["b"] = 0,
            ["g"] = 1,
            ["r"] = 1,
        },
        ["clickableHeight"] = 15,
        ["fontOutline"] = "NONE",
        ["loadDistance"] = 60,
    },
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
}::profile::Cipherarrow
