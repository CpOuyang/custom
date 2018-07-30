{
    ["databars"] = {
        ["artifact"] = {
            ["height"] = 10,
            ["textFormat"] = "CURREM",
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["experience"] = {
            ["height"] = 10,
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["currentTutorial"] = 8,
    ["sle"] = {
        ["Armory"] = {
            ["Inspect"] = {
                ["Enable"] = false,
            },
            ["Character"] = {
                ["Enable"] = false,
            },
        },
    },
    ["movers"] = {
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,280",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,140,700",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["GMMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,206,-80",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,226",
        ["LootFrameMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-120",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,289",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,246",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,342",
        ["ElvUF_TargetTargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,210",
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,120,820",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,343",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,247",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-65,-264",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,270",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,251",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,420,500",
        ["ElvUF_TankMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,868",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,270",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,210",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ElvAB_4"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-351,-23",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,747",
    },
    ["bags"] = {
        ["bagWidth"] = 400,
        ["ignoredItems"] = {
            ["n:上將的指南針"] = "n:上將的指南針",
            ["n:吉福斯"] = "n:吉福斯",
            ["tt:爐石"] = "tt:爐石",
            ["tt:哨子"] = "tt:哨子",
        },
        ["countFontOutline"] = "OUTLINE",
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["countFontSize"] = 12,
        ["bagSize"] = 38,
    },
    ["chat"] = {
        ["timeStampFormat"] = "%H:%M:%S ",
        ["tabFontSize"] = 14,
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["panelTabBackdrop"] = true,
        ["panelBackdrop"] = "LEFT",
        ["panelWidth"] = 480,
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["topPanel"] = false,
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
        ["numberPrefixStyle"] = "CHINESE",
        ["objectiveFrameHeight"] = 720,
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
            },
            ["tank"] = {
                ["verticalSpacing"] = 3,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 56,
                ["width"] = 84,
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
                ["verticalSpacing"] = 1,
                ["name"] = {
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel]",
                },
                ["health"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["enable"] = true,
                },
            },
            ["targettarget"] = {
                ["name"] = {
                    ["text_format"] = "[name:medium]",
                },
            },
            ["target"] = {
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["name"] = {
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel] [shortclassification]",
                },
                ["height"] = 64,
                ["health"] = {
                    ["position"] = "BOTTOMRIGHT",
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
                    ["xOffset"] = -30,
                    ["enable"] = true,
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
                ["verticalSpacing"] = 3,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
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
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["xOffset"] = 30,
                    ["enable"] = true,
                    ["yOffset"] = -16,
                },
                ["verticalSpacing"] = 1,
            },
            ["player"] = {
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
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
        ["bar2"] = {
            ["enabled"] = true,
            ["buttonsize"] = 40,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["backdropSpacingConverted"] = true,
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
        ["bar4"] = {
            ["point"] = "BOTTOMLEFT",
            ["buttonsize"] = 60,
            ["backdrop"] = false,
            ["showGrid"] = false,
        },
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
            ["PLAYER"] = {
                ["debuffs"] = {
                    ["enable"] = false,
                },
                ["buffs"] = {
                    ["enable"] = false,
                },
                ["enable"] = true,
            },
            ["FRIENDLY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                },
            },
            ["ENEMY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
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
                        ["UnitID"] = "target",
                        ["AuraID"] = 1130,
                        ["Caster"] = "all",
                    },
                    [2] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 1978,
                        ["Caster"] = "player",
                    },
                    [3] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 3674,
                        ["Caster"] = "player",
                    },
                    [4] = {
                        ["UnitID"] = "target",
                        ["AuraID"] = 53301,
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
